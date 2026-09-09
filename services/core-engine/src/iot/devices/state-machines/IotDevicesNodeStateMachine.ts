export type IotDevicesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesNodeStateMachine {
  private allowedTransitions: Record<IotDevicesNodeState, IotDevicesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesNodeState, to: IotDevicesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesNodeState, to: IotDevicesNodeState): IotDevicesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesNode: " + from + " -> " + to);
    }
    return to;
  }
}
