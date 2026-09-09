export type IntSalesforcePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforcePayloadStateMachine {
  private allowedTransitions: Record<IntSalesforcePayloadState, IntSalesforcePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforcePayloadState, to: IntSalesforcePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforcePayloadState, to: IntSalesforcePayloadState): IntSalesforcePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforcePayload: " + from + " -> " + to);
    }
    return to;
  }
}
