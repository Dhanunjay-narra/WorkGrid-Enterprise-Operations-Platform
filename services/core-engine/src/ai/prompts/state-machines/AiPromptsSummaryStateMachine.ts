export type AiPromptsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsSummaryStateMachine {
  private allowedTransitions: Record<AiPromptsSummaryState, AiPromptsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsSummaryState, to: AiPromptsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsSummaryState, to: AiPromptsSummaryState): AiPromptsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
