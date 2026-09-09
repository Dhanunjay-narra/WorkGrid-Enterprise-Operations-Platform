export type SupportQueuesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesPayloadStateMachine {
  private allowedTransitions: Record<SupportQueuesPayloadState, SupportQueuesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesPayloadState, to: SupportQueuesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesPayloadState, to: SupportQueuesPayloadState): SupportQueuesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
