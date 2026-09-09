export type IotDevicesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesTaskStateMachine {
  private allowedTransitions: Record<IotDevicesTaskState, IotDevicesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesTaskState, to: IotDevicesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesTaskState, to: IotDevicesTaskState): IotDevicesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesTask: " + from + " -> " + to);
    }
    return to;
  }
}
