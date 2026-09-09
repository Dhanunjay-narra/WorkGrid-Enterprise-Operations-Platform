export type IotDevicesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesSessionStateMachine {
  private allowedTransitions: Record<IotDevicesSessionState, IotDevicesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesSessionState, to: IotDevicesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesSessionState, to: IotDevicesSessionState): IotDevicesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesSession: " + from + " -> " + to);
    }
    return to;
  }
}
