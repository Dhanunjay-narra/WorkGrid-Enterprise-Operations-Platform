export type AuditMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditMappingStateMachine {
  private allowedTransitions: Record<AuditMappingState, AuditMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditMappingState, to: AuditMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditMappingState, to: AuditMappingState): AuditMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditMapping: " + from + " -> " + to);
    }
    return to;
  }
}
