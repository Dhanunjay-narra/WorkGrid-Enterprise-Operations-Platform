export type SupportEscalationPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationPayloadStateMachine {
  private allowedTransitions: Record<SupportEscalationPayloadState, SupportEscalationPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationPayloadState, to: SupportEscalationPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationPayloadState, to: SupportEscalationPayloadState): SupportEscalationPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationPayload: " + from + " -> " + to);
    }
    return to;
  }
}
