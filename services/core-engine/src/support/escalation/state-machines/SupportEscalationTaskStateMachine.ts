export type SupportEscalationTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationTaskStateMachine {
  private allowedTransitions: Record<SupportEscalationTaskState, SupportEscalationTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationTaskState, to: SupportEscalationTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationTaskState, to: SupportEscalationTaskState): SupportEscalationTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationTask: " + from + " -> " + to);
    }
    return to;
  }
}
