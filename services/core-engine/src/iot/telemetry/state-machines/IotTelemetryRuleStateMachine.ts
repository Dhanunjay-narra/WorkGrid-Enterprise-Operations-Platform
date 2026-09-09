export type IotTelemetryRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryRuleStateMachine {
  private allowedTransitions: Record<IotTelemetryRuleState, IotTelemetryRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryRuleState, to: IotTelemetryRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryRuleState, to: IotTelemetryRuleState): IotTelemetryRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryRule: " + from + " -> " + to);
    }
    return to;
  }
}
