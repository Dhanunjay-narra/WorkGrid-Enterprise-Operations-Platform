export type AiRagTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagTaskStateMachine {
  private allowedTransitions: Record<AiRagTaskState, AiRagTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagTaskState, to: AiRagTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagTaskState, to: AiRagTaskState): AiRagTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagTask: " + from + " -> " + to);
    }
    return to;
  }
}
