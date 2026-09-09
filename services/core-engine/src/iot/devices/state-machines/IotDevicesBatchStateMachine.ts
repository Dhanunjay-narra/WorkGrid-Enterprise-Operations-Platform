export type IotDevicesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesBatchStateMachine {
  private allowedTransitions: Record<IotDevicesBatchState, IotDevicesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesBatchState, to: IotDevicesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesBatchState, to: IotDevicesBatchState): IotDevicesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
