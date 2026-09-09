export type IntMappingsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsMetricStateMachine {
  private allowedTransitions: Record<IntMappingsMetricState, IntMappingsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsMetricState, to: IntMappingsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsMetricState, to: IntMappingsMetricState): IntMappingsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
