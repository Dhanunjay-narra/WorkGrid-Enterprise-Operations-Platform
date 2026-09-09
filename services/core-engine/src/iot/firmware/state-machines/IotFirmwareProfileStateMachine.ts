export type IotFirmwareProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareProfileStateMachine {
  private allowedTransitions: Record<IotFirmwareProfileState, IotFirmwareProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareProfileState, to: IotFirmwareProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareProfileState, to: IotFirmwareProfileState): IotFirmwareProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareProfile: " + from + " -> " + to);
    }
    return to;
  }
}
