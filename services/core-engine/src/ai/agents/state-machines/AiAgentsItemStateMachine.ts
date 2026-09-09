export type AiAgentsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsItemStateMachine {
  private allowedTransitions: Record<AiAgentsItemState, AiAgentsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsItemState, to: AiAgentsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsItemState, to: AiAgentsItemState): AiAgentsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsItem: " + from + " -> " + to);
    }
    return to;
  }
}
