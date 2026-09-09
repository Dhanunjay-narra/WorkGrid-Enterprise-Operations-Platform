export type IotDevicesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesEventStateMachine {
  private allowedTransitions: Record<IotDevicesEventState, IotDevicesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesEventState, to: IotDevicesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesEventState, to: IotDevicesEventState): IotDevicesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
