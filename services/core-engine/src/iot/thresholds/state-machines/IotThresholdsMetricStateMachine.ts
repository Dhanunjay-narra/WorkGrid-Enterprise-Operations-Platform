export type IotThresholdsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsMetricStateMachine {
  private allowedTransitions: Record<IotThresholdsMetricState, IotThresholdsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsMetricState, to: IotThresholdsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsMetricState, to: IotThresholdsMetricState): IotThresholdsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
