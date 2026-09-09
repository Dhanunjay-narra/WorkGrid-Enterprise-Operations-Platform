export type AiMemoryMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryMetricStateMachine {
  private allowedTransitions: Record<AiMemoryMetricState, AiMemoryMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryMetricState, to: AiMemoryMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryMetricState, to: AiMemoryMetricState): AiMemoryMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryMetric: " + from + " -> " + to);
    }
    return to;
  }
}
