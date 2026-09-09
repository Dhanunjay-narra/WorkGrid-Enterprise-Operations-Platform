export type AiAgentsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsNodeStateMachine {
  private allowedTransitions: Record<AiAgentsNodeState, AiAgentsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsNodeState, to: AiAgentsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsNodeState, to: AiAgentsNodeState): AiAgentsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsNode: " + from + " -> " + to);
    }
    return to;
  }
}
