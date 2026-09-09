export type AiAgentsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsStateStateMachine {
  private allowedTransitions: Record<AiAgentsStateState, AiAgentsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsStateState, to: AiAgentsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsStateState, to: AiAgentsStateState): AiAgentsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsState: " + from + " -> " + to);
    }
    return to;
  }
}
