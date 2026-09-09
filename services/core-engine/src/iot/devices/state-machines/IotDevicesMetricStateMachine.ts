export type IotDevicesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesMetricStateMachine {
  private allowedTransitions: Record<IotDevicesMetricState, IotDevicesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesMetricState, to: IotDevicesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesMetricState, to: IotDevicesMetricState): IotDevicesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
