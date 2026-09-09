export type SupportTicketsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsSnapshotStateMachine {
  private allowedTransitions: Record<SupportTicketsSnapshotState, SupportTicketsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsSnapshotState, to: SupportTicketsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsSnapshotState, to: SupportTicketsSnapshotState): SupportTicketsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
