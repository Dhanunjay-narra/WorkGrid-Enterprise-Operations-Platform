export type SupportTicketsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsItemStateMachine {
  private allowedTransitions: Record<SupportTicketsItemState, SupportTicketsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsItemState, to: SupportTicketsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsItemState, to: SupportTicketsItemState): SupportTicketsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsItem: " + from + " -> " + to);
    }
    return to;
  }
}
