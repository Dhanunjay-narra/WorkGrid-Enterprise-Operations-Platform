export type AiAgentsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsEventStateMachine {
  private allowedTransitions: Record<AiAgentsEventState, AiAgentsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsEventState, to: AiAgentsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsEventState, to: AiAgentsEventState): AiAgentsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
