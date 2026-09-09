export type SupportTicketsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsPayloadStateMachine {
  private allowedTransitions: Record<SupportTicketsPayloadState, SupportTicketsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsPayloadState, to: SupportTicketsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsPayloadState, to: SupportTicketsPayloadState): SupportTicketsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
