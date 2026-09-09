export type AiAgentsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsProfileStateMachine {
  private allowedTransitions: Record<AiAgentsProfileState, AiAgentsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsProfileState, to: AiAgentsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsProfileState, to: AiAgentsProfileState): AiAgentsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
