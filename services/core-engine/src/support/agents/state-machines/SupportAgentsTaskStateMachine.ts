export type SupportAgentsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsTaskStateMachine {
  private allowedTransitions: Record<SupportAgentsTaskState, SupportAgentsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsTaskState, to: SupportAgentsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsTaskState, to: SupportAgentsTaskState): SupportAgentsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsTask: " + from + " -> " + to);
    }
    return to;
  }
}
