export type AiPromptsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsBatchStateMachine {
  private allowedTransitions: Record<AiPromptsBatchState, AiPromptsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsBatchState, to: AiPromptsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsBatchState, to: AiPromptsBatchState): AiPromptsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
