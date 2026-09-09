export type AiAgentsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsBatchStateMachine {
  private allowedTransitions: Record<AiAgentsBatchState, AiAgentsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsBatchState, to: AiAgentsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsBatchState, to: AiAgentsBatchState): AiAgentsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
