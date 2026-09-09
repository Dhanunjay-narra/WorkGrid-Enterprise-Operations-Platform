export type AiRagConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagConfigStateMachine {
  private allowedTransitions: Record<AiRagConfigState, AiRagConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagConfigState, to: AiRagConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagConfigState, to: AiRagConfigState): AiRagConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagConfig: " + from + " -> " + to);
    }
    return to;
  }
}
