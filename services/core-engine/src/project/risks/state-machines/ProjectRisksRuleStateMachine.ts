export type ProjectRisksRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksRuleStateMachine {
  private allowedTransitions: Record<ProjectRisksRuleState, ProjectRisksRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksRuleState, to: ProjectRisksRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksRuleState, to: ProjectRisksRuleState): ProjectRisksRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksRule: " + from + " -> " + to);
    }
    return to;
  }
}
