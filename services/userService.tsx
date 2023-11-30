import { SUPABASE_KEY, SUPABASE_URL } from "../pfiles/supa";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { ServiceInfoProps, ServiceUserInterface } from "@/components/servicecard2";
import { PrismaClient} from '@prisma/client';

// Interface representando a estrutura de um usuário
interface UserType {
  userId?: string;
  name?: string;
  email?: string;
}

// Classe do serviço de usuário
export class UserService {
  // private supabaseService: SupabaseAPI;
  private supabase: SupabaseClient;

  constructor() {
    // this.supabaseService = new SupabaseAPI(); // Inicializa o serviço do Supabase
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  }

  // Função para buscar todos os usuários
  async getAllUsers() {
    try {
      // Chama o método do serviço do Supabase para obter usuários
      // const { data, error, status } = await this.supabase
      //   .from("User")
      //   .select("userId, name, email")
      //   .eq("userId", "3")
      //   .limit(1);

      const prisma = new PrismaClient();

      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const services = await prisma.service.findMany({
        select: {
          serviceId: true,
          name: true,
          status: true,
          date: true,
          createdAt: true,
          local: true,
          ServiceUser: {
            select: {
              position: true,
              positionName: true,
              user: {
                select: {
                  userId: true,
                  name: true,
                },
              },
            },
          },
        },
        where: {
          status: { not: 'CONCLUIDO' },
          createdAt: { gte: thirtyDaysAgo }, // Considera apenas datas nos últimos 30 dias
        },
      });

      const servicesData = services[0];
      const usersInService: ServiceUserInterface = {};
      servicesData.ServiceUser.map((user) => { 

        if (user.positionName == "DIRETOR") {usersInService.directorUser = user.user.name}
        else if (user.positionName == "MESA") {usersInService.switcherUser = user.user.name}
        else if (user.positionName == "CAM2") {usersInService.cam2User = user.user.name}
        else if (user.positionName == "CAM3") {usersInService.cam3User = user.user.name}
        else if (user.positionName == "CAM4") {usersInService.cam4User = user.user.name}
        else if (user.positionName == "CAM5") {usersInService.cam5User = user.user.name}
        else if (user.positionName == "CAM6") {usersInService.cam6User = user.user.name}
        else if (user.positionName == "BACKSTAGE") {usersInService.cam3User = user.user.name}
        else if (user.positionName == "ADICIONAL"){
          usersInService.additional?.push({userId: user.user.userId, userName: user.user.name})
        }
       })
      

      if (services) {
        const serviceWithType: ServiceInfoProps = {
          serviceId: servicesData.serviceId,
          serviceTitle: servicesData.name,
          serviceStatus: servicesData.status,
          serviceDate: servicesData.date.getTime(),
          servicePlace: servicesData.local,
          serviceUser: usersInService
        };
        // console.warn("user: " + userWithType.name + ". Status: " + status)
        return serviceWithType;
      } else {
        console.log("erro na req");
      }
    } catch (error) {
      console.error("Erro ao buscar usuários: " + error);
      throw error;
    }
  }

  // Outras operações relacionadas aos usuários
  // Por exemplo: adicionar usuário, atualizar usuário, excluir usuário, etc.
}
function subDays(arg0: Date, arg1: number) {
  throw new Error("Function not implemented.");
}

