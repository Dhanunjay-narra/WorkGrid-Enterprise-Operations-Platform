export type AiToolsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsMetricStateMachine {
  private allowedTransitions: Record<AiToolsMetricState, AiToolsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsMetricState, to: AiToolsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsMetricState, to: AiToolsMetricState): AiToolsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
