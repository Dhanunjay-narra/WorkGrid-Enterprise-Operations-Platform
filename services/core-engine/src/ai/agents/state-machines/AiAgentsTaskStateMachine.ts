export type AiAgentsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsTaskStateMachine {
  private allowedTransitions: Record<AiAgentsTaskState, AiAgentsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsTaskState, to: AiAgentsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsTaskState, to: AiAgentsTaskState): AiAgentsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsTask: " + from + " -> " + to);
    }
    return to;
  }
}
