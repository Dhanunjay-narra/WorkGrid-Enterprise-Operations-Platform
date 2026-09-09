export type IotDevicesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesQueueStateMachine {
  private allowedTransitions: Record<IotDevicesQueueState, IotDevicesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesQueueState, to: IotDevicesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesQueueState, to: IotDevicesQueueState): IotDevicesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
