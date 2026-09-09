export type AiRagProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagProfileStateMachine {
  private allowedTransitions: Record<AiRagProfileState, AiRagProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagProfileState, to: AiRagProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagProfileState, to: AiRagProfileState): AiRagProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagProfile: " + from + " -> " + to);
    }
    return to;
  }
}
