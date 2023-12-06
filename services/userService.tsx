import { SUPABASE_KEY, SUPABASE_URL } from "../pfiles/supa";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import {
  ServiceInfoWithUsersProps,
  ServiceUserInterface,
  ServiceInfoInterface,
} from "@/components/servicecard2";
import { PrismaClient } from "@prisma/client";

// Interface representando a estrutura de um usuário
interface UserType {
  userId?: String;
  name?: String;
  email?: String;
}

// Classe do serviço de usuário
export class UserService {
  // private supabaseService: SupabaseAPI;
  private supabase: SupabaseClient;

  constructor() {
    // this.supabaseService = new SupabaseAPI(); // Inicializa o serviço do Supabase
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  async getAllUser() {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const {
      data: User,
      error,
      status,
    } = await supabase.from("User").select("*");

    console.log("{ServiceUser} Error: " + error, " or Status: " + status);
    return User;
  }

  // Função para buscar todos os usuários
  async getServiceAndYoursUsers() {
    try {
      // Chama o método do serviço do Supabase para obter usuários
      // const { data: services, error, status } = await this.supabase
      //   .from("User")
      //   .select("userId, name, email")
      //   .eq("userId", "3")
      //   .limit(1);

      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

      const {
        data: Service,
        error,
        status,
      } = await supabase
        .from("Service")
        .select("*");

      let serviceData: ServiceInfoInterface[] = [];

      if (Service) {
        serviceData.push({
          serviceId: Service[0].serviceId,
          serviceTitle: Service[0].name,
          serviceStatus: Service[0].status,
          servicePlace: Service[0].local,
          serviceDate: Service[0].date,
        });
      }

      serviceData.map((item) => {
        console.log("ServiceData{userService}: " + item);
      });
      console.log("Status{userService}: " + status);

      // const usersInService: ServiceInfoWithUsersProps = {
      //   serviceId: 1,
      //   serviceTitle: "",
      //   servicePlace: "",
      //   serviceDate: new Date().getDate(),
      //   serviceStatus: "",
      //   serviceUser: {},
      // };

      // services.map((serviceItem) => {
      //   usersInService.serviceId = serviceItem.serviceId;
      //   usersInService.serviceTitle = serviceItem.name;
      //   usersInService.servicePlace = serviceItem.local;
      //   usersInService.serviceDate = serviceItem.date.getDate();
      //   usersInService.serviceStatus = serviceItem.status;

      //   serviceItem.ServiceUser.map((user) => {
      //     if (user.positionName == "DIRETOR") {
      //       usersInService.serviceUser.directorUser = user.user.name;
      //     } else if (user.positionName == "MESA") {
      //       usersInService.serviceUser.switcherUser = user.user.name;
      //     } else if (user.positionName == "CAM2") {
      //       usersInService.serviceUser.cam2User = user.user.name;
      //     } else if (user.positionName == "CAM3") {
      //       usersInService.serviceUser.cam3User = user.user.name;
      //     } else if (user.positionName == "CAM4") {
      //       usersInService.serviceUser.cam4User = user.user.name;
      //     } else if (user.positionName == "CAM5") {
      //       usersInService.serviceUser.cam5User = user.user.name;
      //     } else if (user.positionName == "CAM6") {
      //       usersInService.serviceUser.cam6User = user.user.name;
      //     } else if (user.positionName == "BACKSTAGE") {
      //       usersInService.serviceUser.backstage = user.user.name;
      //     } else if (user.positionName == "ADICIONAL") {
      //       usersInService.serviceUser.additional?.push({
      //         userId: user.user.userId,
      //         userName: user.user.name,
      //       });
      //     }
      //   });
      // });

      if (serviceData) {
        return serviceData;
      } else {
        console.log("Erro no supabase{userService}: " + error);
      }
    } catch (error) {
      console.error("Erro ao buscar usuários{userService}: " + error);
      throw error;
    }
  }

  // Outras operações relacionadas aos usuários
  // Por exemplo: adicionar usuário, atualizar usuário, excluir usuário, etc.
}
