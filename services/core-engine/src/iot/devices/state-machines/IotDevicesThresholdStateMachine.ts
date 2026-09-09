export type IotDevicesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesThresholdStateMachine {
  private allowedTransitions: Record<IotDevicesThresholdState, IotDevicesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesThresholdState, to: IotDevicesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesThresholdState, to: IotDevicesThresholdState): IotDevicesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
