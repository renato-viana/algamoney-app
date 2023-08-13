import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ErrorHandlerService } from "../error-handler.service";

import { AuthService } from "./../../seguranca/auth.service";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  exibindoMenu: boolean = false;
  usuarioLogado: string = "";

  constructor(
    public auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.usuarioLogado = this.auth.jwtPayload?.nome;
  }

  temPermissao(permissao: string) {
    return this.auth.temPermissao(permissao);
  }

  logout() {
    this.exibindoMenu = false;
    this.confirmationService.confirm({
      message: "Tem certeza que deseja sair?",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sim",
      rejectLabel: "Cancelar",
      accept: () => {
        this.auth.logout();
      },
    });
  }

  // Método para fechar o menu quando um clique é detectado fora dele
  fecharMenu(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest(".navbar")) {
      this.exibindoMenu = false;
    }
  }

  // Ovinte de eventos para fechar o menu ao clicar fora dele
  @HostListener("document:click", ["$event"])
  clickForaMenu(event: MouseEvent) {
    this.fecharMenu(event);
  }
}
