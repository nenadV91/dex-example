export enum ApplicationModal {
  WALLET,
}

export interface ApplicationState {
  openModal: ApplicationModal | null;
}
