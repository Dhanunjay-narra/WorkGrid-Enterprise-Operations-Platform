export type AiAgentsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsConfigStateMachine {
  private allowedTransitions: Record<AiAgentsConfigState, AiAgentsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsConfigState, to: AiAgentsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsConfigState, to: AiAgentsConfigState): AiAgentsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
