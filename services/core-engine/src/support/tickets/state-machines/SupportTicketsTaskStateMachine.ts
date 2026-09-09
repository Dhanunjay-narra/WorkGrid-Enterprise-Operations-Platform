export type SupportTicketsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsTaskStateMachine {
  private allowedTransitions: Record<SupportTicketsTaskState, SupportTicketsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsTaskState, to: SupportTicketsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsTaskState, to: SupportTicketsTaskState): SupportTicketsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsTask: " + from + " -> " + to);
    }
    return to;
  }
}
