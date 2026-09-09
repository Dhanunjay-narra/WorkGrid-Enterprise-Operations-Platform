export type AiPromptsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsTransactionStateMachine {
  private allowedTransitions: Record<AiPromptsTransactionState, AiPromptsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsTransactionState, to: AiPromptsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsTransactionState, to: AiPromptsTransactionState): AiPromptsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
