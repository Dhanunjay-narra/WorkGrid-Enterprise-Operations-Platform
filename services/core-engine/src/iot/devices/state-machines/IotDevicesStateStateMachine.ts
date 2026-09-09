export type IotDevicesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesStateStateMachine {
  private allowedTransitions: Record<IotDevicesStateState, IotDevicesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesStateState, to: IotDevicesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesStateState, to: IotDevicesStateState): IotDevicesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesState: " + from + " -> " + to);
    }
    return to;
  }
}
