export type AiPromptsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsMetricStateMachine {
  private allowedTransitions: Record<AiPromptsMetricState, AiPromptsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsMetricState, to: AiPromptsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsMetricState, to: AiPromptsMetricState): AiPromptsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
