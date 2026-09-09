export type AiEmbeddingsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEmbeddingsRuleStateMachine {
  private allowedTransitions: Record<AiEmbeddingsRuleState, AiEmbeddingsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEmbeddingsRuleState, to: AiEmbeddingsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEmbeddingsRuleState, to: AiEmbeddingsRuleState): AiEmbeddingsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEmbeddingsRule: " + from + " -> " + to);
    }
    return to;
  }
}
