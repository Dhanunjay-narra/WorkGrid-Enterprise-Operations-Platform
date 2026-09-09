export type IotFirmwareMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareMetricStateMachine {
  private allowedTransitions: Record<IotFirmwareMetricState, IotFirmwareMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareMetricState, to: IotFirmwareMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareMetricState, to: IotFirmwareMetricState): IotFirmwareMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareMetric: " + from + " -> " + to);
    }
    return to;
  }
}
