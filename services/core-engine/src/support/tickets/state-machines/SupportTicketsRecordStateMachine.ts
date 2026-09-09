export type SupportTicketsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsRecordStateMachine {
  private allowedTransitions: Record<SupportTicketsRecordState, SupportTicketsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsRecordState, to: SupportTicketsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsRecordState, to: SupportTicketsRecordState): SupportTicketsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
