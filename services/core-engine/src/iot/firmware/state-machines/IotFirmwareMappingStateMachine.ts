export type IotFirmwareMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareMappingStateMachine {
  private allowedTransitions: Record<IotFirmwareMappingState, IotFirmwareMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareMappingState, to: IotFirmwareMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareMappingState, to: IotFirmwareMappingState): IotFirmwareMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareMapping: " + from + " -> " + to);
    }
    return to;
  }
}
