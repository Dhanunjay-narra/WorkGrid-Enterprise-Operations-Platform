export type IotFirmwarePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwarePolicyStateMachine {
  private allowedTransitions: Record<IotFirmwarePolicyState, IotFirmwarePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwarePolicyState, to: IotFirmwarePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwarePolicyState, to: IotFirmwarePolicyState): IotFirmwarePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwarePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
