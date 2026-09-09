export type ProjectCapacityRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityRuleStateMachine {
  private allowedTransitions: Record<ProjectCapacityRuleState, ProjectCapacityRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityRuleState, to: ProjectCapacityRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityRuleState, to: ProjectCapacityRuleState): ProjectCapacityRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityRule: " + from + " -> " + to);
    }
    return to;
  }
}
