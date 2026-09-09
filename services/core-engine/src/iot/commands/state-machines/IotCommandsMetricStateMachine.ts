export type IotCommandsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsMetricStateMachine {
  private allowedTransitions: Record<IotCommandsMetricState, IotCommandsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsMetricState, to: IotCommandsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsMetricState, to: IotCommandsMetricState): IotCommandsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
