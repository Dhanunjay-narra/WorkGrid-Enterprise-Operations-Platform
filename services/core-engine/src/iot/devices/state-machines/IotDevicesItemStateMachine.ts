export type IotDevicesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesItemStateMachine {
  private allowedTransitions: Record<IotDevicesItemState, IotDevicesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesItemState, to: IotDevicesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesItemState, to: IotDevicesItemState): IotDevicesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesItem: " + from + " -> " + to);
    }
    return to;
  }
}
