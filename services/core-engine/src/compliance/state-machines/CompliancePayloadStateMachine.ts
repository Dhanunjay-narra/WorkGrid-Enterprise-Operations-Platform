export type CompliancePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CompliancePayloadStateMachine {
  private allowedTransitions: Record<CompliancePayloadState, CompliancePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CompliancePayloadState, to: CompliancePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CompliancePayloadState, to: CompliancePayloadState): CompliancePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CompliancePayload: " + from + " -> " + to);
    }
    return to;
  }
}
